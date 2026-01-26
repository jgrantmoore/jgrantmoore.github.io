import Image from 'next/image';
import '../StyleSheets/Projects.css';

const Project = (props) => {
    return (
        <a href={props.url} target="_blank" rel="noopener noreferrer">
            <div className="project">
                <h2>{props.title}</h2>
                <Image 
                    src={props.image} 
                    alt={props.alt}
                    width={300}
                    height={200}
                />
                {(props.image2 != null) && (
                    <Image 
                        src={props.image2} 
                        alt={props.alt2}
                        width={300}
                        height={200}
                    />
                )}
                <p>{props.description}</p>
            </div>
        </a>
    );
};
export default Project;