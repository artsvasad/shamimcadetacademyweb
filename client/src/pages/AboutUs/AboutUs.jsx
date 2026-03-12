import './AboutUs.scss'
import MainPageLayout from "../../components/Layout/MainPageLayout";

export default function AboutUs() {
    const pageTitle = "About Us";
    document.title = pageTitle;
    const metaDescription = "Learn about Shamim Cadet Academy's mission, vision, values, and dedicated team. Discover how we prepare students for prestigious cadet college admissions.";
    const metaKeywords = "Shamim Cadet Academy, about us, mission, vision, leadership, cadet college coaching";
    const metaAuthor = "Shamim Cadet Academy";

    const values = [
        {
            id: 1,
            title: "Excellence",
            description: "We are committed to providing the highest quality of education and coaching, ensuring every student reaches their full potential.",
            icon: "🏆"
        },
        {
            id: 2,
            title: "Integrity",
            description: "We maintain the highest standards of honesty and ethical conduct in all our dealings with students, parents, and stakeholders.",
            icon: "⭐"
        },
        {
            id: 3,
            title: "Discipline",
            description: "We instill discipline and focus in our students, preparing them not only for exams but for the demanding life of a cadet.",
            icon: "💪"
        },
        {
            id: 4,
            title: "Dedication",
            description: "We are dedicated to the success of each student, providing personalized attention and support throughout their journey.",
            icon: "🎯"
        }
    ];

    const milestones = [
        {
            year: "2020",
            event: "Academy Founded",
            description: "Shamim Cadet Academy was established with the vision of providing quality coaching for cadet college admissions."
        },
        {
            year: "2021",
            event: "First Batch Success",
            description: "Our first batch of students achieved remarkable success with multiple admissions to prestigious cadet colleges."
        },
        {
            year: "2022",
            event: "Expansion",
            description: "Expanded our programs and increased student intake, maintaining our high quality standards."
        },
        {
            year: "2023",
            event: "Excellence Recognition",
            description: "Recognized as one of the leading cadet college coaching centers in the region."
        },
        {
            year: "2024",
            event: "Technology Integration",
            description: "Integrated advanced learning management systems and online coaching platforms."
        },
        {
            year: "2025",
            event: "Student Success Rate",
            description: "Achieved 85% success rate in cadet college admissions among our graduates."
        }
    ];

    return (
        <MainPageLayout title={pageTitle} description={metaDescription} keywords={metaKeywords} author={metaAuthor}>
            <section className="aboutus-container">
                {/* Hero Section */}
                <div className="aboutus-header">
                    <h1>About Shamim Cadet Academy</h1>
                    <p className="intro-text">Your Gateway to Excellence and Leadership</p>
                </div>

                {/* Mission & Vision */}
                <article className="mission-vision">
                    <div className="mission">
                        <h2>Our Mission</h2>
                        <p>
                            To provide comprehensive, high-quality coaching and mentorship to aspiring cadets, preparing them academically, physically, and mentally for admission to prestigious cadet colleges. We are committed to nurturing leaders of tomorrow who embody integrity, discipline, and excellence.
                        </p>
                    </div>
                    <div className="vision">
                        <h2>Our Vision</h2>
                        <p>
                            To be the premier destination for cadet college admission coaching, recognized nationally for our innovation, excellence, and the success of our students. We envision a future where every dedicated student achieves their dream of joining a prestigious cadet college.
                        </p>
                    </div>
                </article>

                {/* Core Values */}
                <article className="values-section">
                    <h2>Our Core Values</h2>
                    <div className="values-grid">
                        {values.map((value) => (
                            <div key={value.id} className="value-card">
                                <div className="value-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </article>

                {/* Journey & Milestones */}
                <article className="milestones-section">
                    <h2>Our Journey</h2>
                    <div className="timeline">
                        {milestones.map((milestone, index) => (
                            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                                <div className="timeline-content">
                                    <div className="year">{milestone.year}</div>
                                    <h3>{milestone.event}</h3>
                                    <p>{milestone.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </article>

                {/* Why Choose Us */}
                <article className="why-choose-us">
                    <h2>Why Choose Us?</h2>
                    <div className="reasons-grid">
                        <div className="reason-card">
                            <h3>Expert Faculty</h3>
                            <p>Our team consists of experienced educators and former military professionals dedicated to student success.</p>
                        </div>
                        <div className="reason-card">
                            <h3>Comprehensive Program</h3>
                            <p>We offer integrated academic, physical, and mental fitness training tailored to cadet college requirements.</p>
                        </div>
                        <div className="reason-card">
                            <h3>Proven Track Record</h3>
                            <p>With an 85% success rate, our students consistently gain admission to top cadet colleges.</p>
                        </div>
                        <div className="reason-card">
                            <h3>Modern Facilities</h3>
                            <p>State-of-the-art classrooms, laboratories, and training facilities for optimal learning environment.</p>
                        </div>
                        <div className="reason-card">
                            <h3>Personalized Attention</h3>
                            <p>Small batch sizes ensure personalized coaching and mentorship for each student.</p>
                        </div>
                        <div className="reason-card">
                            <h3>Holistic Development</h3>
                            <p>We focus on all-round development including leadership skills, communication, and character building.</p>
                        </div>
                    </div>
                </article>

                {/* Commitment Section */}
                <article className="commitment-section">
                    <h2>Our Commitment to You</h2>
                    <p>
                        At Shamim Cadet Academy, we are not just an institution; we are your partners in your journey towards achieving your dreams. We are committed to providing you with the best possible education, guidance, and support. Every student who walks through our doors is a future leader, and we take that responsibility seriously. We promise to challenge you, inspire you, and equip you with the tools and confidence needed to excel in the cadet college admission process and beyond.
                    </p>
                </article>
            </section>
        </MainPageLayout>
    );
}
