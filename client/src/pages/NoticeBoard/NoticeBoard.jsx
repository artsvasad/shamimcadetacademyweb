import './NoticeBoard.scss'
import MainPageLayout from "../../components/Layout/MainPageLayout";

export default function NoticeBoard() {
    const pageTitle = "Notice Board";
    document.title = pageTitle;
    const metaDescription = "Welcome to Shamim Cadet Academy, At Shamim Cadet Academy, we are dedicated to turning your dream of joining a prestigious Cadet College into reality. As a premier admission coaching center, we offer a comprehensive program that combines rigorous academic preparation with the     discipline, mental toughness, and strategy needed to ace the admission test. We believe in fostering a strong sense of focus, confidence, and determination among our future cadets. Join us on a journey of growth and transformation as we equip our students to conquer one of the most competitive exams in the country. If you are ready to put in the hard work and secure your place at a Cadet College, Shamim Cadet Academy is where your journey begins.";
    const metaKeywords = "Shamim Cadet Academy, cadet academy, leadership development, academic excellence, physical fitness, discipline, integrity, camaraderie";      
    const metaAuthor = "Shamim Cadet Academy";

    const getPriorityColor = (index) => {
        const colors = ['high', 'medium', 'low'];
        return colors[index % colors.length];
    };

    const notices = [
        {
            id: 1,
            title: 'Weekly Test Schedule',
            date: '2026-02-28',
            description: 'The upcomming weekly test will be held on 6th March, 2026. All students are required to attend and prepare accordingly. The test will cover all subjects and will be conducted in the morning session. Please ensure you arrive on time and bring all necessary materials for the test.',
            link: 'https://drive.google.com/file/d/1_G5mN09P19zs6XSBR2R9gmuWILlmxEoc/view?usp=sharing'
        },
        {
            id : 2,
            title: "Eid-Ul-Fitar Holiday Notice",
            date: "2026-02-28",
            description: "In observance of Eid-Ul-Fitar, Shamim Cadet Academy will be closed from 13th March, 2026 to 28th March, 2026 . We wish all our students and their families a joyous and blessed Eid. Regular classes will resume on 29th July, 2026. Please plan accordingly and enjoy the holiday with your loved ones.",
            link: "https://drive.google.com/file/d/10U_pi01bQ_RVkq-2SV_eAIBdCBlnEsG5/view?usp=sharing"

        },
        
    ]
    return (
       <MainPageLayout title={pageTitle} description={metaDescription} keywords={metaKeywords} author={metaAuthor}>
            <section className="noticeboard-container">
                <div className="noticeboard-header">
                    <h1>{pageTitle}</h1>
                    <p className="intro-text">Welcome to the Notice Board of Shamim Cadet Academy. Here, you will find the latest updates, announcements, and important information related to our academy and the cadet college admission process. Stay tuned for upcoming events, admission deadlines, and other relevant news that will help you stay informed and prepared for your journey towards joining a prestigious cadet college.</p>
                </div>

                <article className="notices-section">
                    <h2>Latest Notices</h2>
                    <div className="cards-container">
                        {notices.map((notice, index) => (
                            <div key={notice.id} className={`notice-card priority-${getPriorityColor(index)}`}>
                                <div className="card-header"><span>{notice.id}</span>
                                <time className="card-date">{new Date(notice.date).toLocaleDateString('en-US', { 
                                        year: 'numeric', 
                                        month: 'long', 
                                        day: 'numeric' 
                                    })}</time>
                                    <a href={notice.link} className="card-link">Read More</a>
                                    
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">{notice.title}</h3>
                                    <p className="card-description">{notice.description}</p>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </article>
            </section>
       </MainPageLayout>
    )
}