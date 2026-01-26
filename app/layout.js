import '../src/StyleSheets/index.css';
import TopBar from '@/src/Components/TopBar';
import { Container } from 'reactstrap';

export const metadata = {
    title: 'Grant Moore',
    description: 'Portfolio of Grant Moore',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link href='https://fonts.googleapis.com/css?family=Audiowide' rel='stylesheet' />
                <link href='https://fonts.googleapis.com/css?family=Kelly Slab' rel='stylesheet' />
                <link href='https://fonts.googleapis.com/css?family=Sanchez' rel='stylesheet' />
            </head>
            <body>
                <div id="layout-div">
                    <TopBar />
                            <Container id="main-container" tag="main">
                                {children}
                            </Container>
                        </div>
                    </body>
                </html>
                );
}
