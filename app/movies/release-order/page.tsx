'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwfFyIGgGM1ijXqmsNF_QwTSfhsPtmAJZCJef1LhynJ7aamawhh0qpqY-9RpyH1W9bK/exec";
const TMDB_AUTH = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTdlOTMxYjY4MjM1NjBkNGNmMjc0YzhkZmZhMTc4YSIsIm5iZiI6MTc1MDE5MTEwOC40MjcsInN1YiI6IjY4NTFjYzA0YWViYTJkMmZlNGIzMTU0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q-mtZuNx4NSIMwB1aO6vwA3MmzkiBOTALyFBLg8cwsc';

interface ScheduledMovie {
    id: string;
    title: string;
    releaseDate: string;
    owner: string;
    revenue: number;
    isBench: boolean;
}

export default function ReleaseOrder() {
    const [schedule, setSchedule] = useState<ScheduledMovie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "Fantasy Movie League - Release Order";
    }, []);

    useEffect(() => {
        async function fetchSchedule() {
            try {
                const draftRes = await fetch(SCRIPT_URL);
                const draftData = await draftRes.json();

                // 1. Collect all unique IDs
                const allIds = Array.from(new Set(draftData.flatMap((p: any) => [...p.starting, ...p.bench])));

                // 2. Fetch TMDB Details
                const options = { method: 'GET', headers: { accept: 'application/json', Authorization: TMDB_AUTH } };
                const detailPromises = allIds.map(async (id: any) => {
                    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options);
                    return await res.json();
                });

                const movieResults = await Promise.all(detailPromises);
                const movieMap: any = {};
                movieResults.forEach(m => { if (m.id) movieMap[String(m.id)] = m; });

                // 3. Flatten draft into a list of movies with owners
                const flattened: ScheduledMovie[] = [];
                draftData.forEach((player: any) => {
                    player.starting.forEach((id: string) => {
                        const m = movieMap[id];
                        flattened.push({
                            id,
                            title: m?.title || 'Unknown',
                            releaseDate: m?.release_date || '9999-12-31', // Put TBD at end
                            owner: player.name,
                            revenue: m?.revenue || 0,
                            isBench: false
                        });
                    });
                    player.bench.forEach((id: string) => {
                        const m = movieMap[id];
                        flattened.push({
                            id,
                            title: m?.title || 'Unknown',
                            releaseDate: m?.release_date || '9999-12-31',
                            owner: player.name,
                            revenue: m?.revenue || 0,
                            isBench: true
                        });
                    });
                });

                // 4. Sort by date
                flattened.sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime());
                setSchedule(flattened);

            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetchSchedule();
    }, []);

    const formatCurrency = (rev: number) => {
        if (rev >= 1000000000) return `$${(rev / 1000000000).toFixed(2)}B`;
        return `$${(rev / 1000000).toFixed(1)}M`;
    };

    if (loading) return <div className="min-h-screen bg-black text-white flex items-center justify-center font-black italic">LOADING CALENDAR...</div>;

    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-12 font-sans">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-16">
                    <h1 className="text-6xl font-black italic tracking-tighter mb-4">DRAFT BOARD</h1>
                    <div className="flex items-center justify-center gap-4 text-neutral-500 font-bold text-[12px] tracking-[0.2em] uppercase">
                        <Link href="/movies" className="text-blue-500 hover:text-blue-400 transition-colors">Home</Link>
                        <span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
                        <Link href="/movies/leaderboard" className="text-blue-500 hover:text-blue-400 transition-colors">Leaderboard</Link>
                        <span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
                        <Link href="/movies/release-order" className="text-blue-500 hover:text-blue-400 transition-colors">Release Order</Link>
                    </div>
                </header>

                <div className="relative border-l-2 border-neutral-900 ml-4 md:ml-0">
                    {schedule.map((movie, idx) => {
                        const isReleased = movie.releaseDate <= today;

                        return (
                            <div key={`${movie.id}-${idx}`} className="mb-10 ml-8 relative">
                                {/* Timeline Dot */}
                                <div className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full border-4 border-black transition-colors ${isReleased ? 'bg-green-500' : 'bg-blue-600'}`} />

                                <div className={`p-5 rounded-2xl border transition-all ${isReleased ? 'bg-neutral-900/40 border-neutral-800 opacity-60' : 'bg-neutral-900 border-neutral-700 shadow-xl'}`}>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div>
                                            <p className="text-blue-500 font-black text-[10px] tracking-widest uppercase mb-1">
                                                {new Date(movie.releaseDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                            </p>
                                            <h2 className="text-xl font-black uppercase italic tracking-tight">{movie.title}</h2>
                                            <div className="flex items-center gap-2 mt-2">
                                                <span className="text-[10px] font-bold bg-white text-black px-2 py-0.5 rounded uppercase">
                                                    {movie.owner}
                                                </span>
                                                {movie.isBench && (
                                                    <span className="text-[10px] font-bold border border-neutral-700 text-neutral-500 px-2 py-0.5 rounded uppercase">
                                                        Bench
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="text-right md:border-l md:border-neutral-800 md:pl-8">
                                            <p className="text-2xl font-mono font-bold tracking-tighter">
                                                {formatCurrency(movie.revenue)}
                                            </p>
                                            <p className="text-[9px] font-bold text-neutral-500 uppercase">Revenue Collected</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}