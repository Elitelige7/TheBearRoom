import './Home.scss';

const apps = [
    { name: 'Phone', emoji: '📞' },
    { name: 'Messages', emoji: '💬' },
    { name: 'Safari', emoji: '🌐' },
    { name: 'Photos', emoji: '📸' },
    { name: 'Music', emoji: '🎵' },
    { name: 'Settings', emoji: '⚙️' },
    { name: 'Notes', emoji: '📝' },
    { name: 'Calendar', emoji: '📅' },
];

const Home = () => {
    return (
        <div className="home">
            <div className="apps-grid">
                {apps.map((app) => (
                    <div key={app.name} className="app-icon">
                        <div className="icon">{app.emoji}</div>
                        <span className="label">{app.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
