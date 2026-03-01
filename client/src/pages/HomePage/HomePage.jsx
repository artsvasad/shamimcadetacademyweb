import MainPageLayout from "../../components/Layout/MainPageLayout.jsx"
import Hero from "../../components/Layout/Hero/Hero.jsx"

export default function HomePage() {
    const pageTitle = "Home - Shamim Cadet Academy";
    document.title = pageTitle;
    const metaDescription = "Welcome to Shamim Cadet Academy, At Shamim Cadet Academy, we are dedicated to turning your dream of joining a prestigious Cadet College into reality. As a premier admission coaching center, we offer a comprehensive program that combines rigorous academic preparation with the discipline, mental toughness, and strategy needed to ace the admission test. We believe in fostering a strong sense of focus, confidence, and determination among our future cadets. Join us on a journey of growth and transformation as we equip our students to conquer one of the most competitive exams in the country. If you are ready to put in the hard work and secure your place at a Cadet College, Shamim Cadet Academy is where your journey begins.";
    const metaKeywords = "Shamim Cadet Academy, cadet academy, leadership development, academic excellence, physical fitness, discipline, integrity, camaraderie";
    const metaAuthor = "Shamim Cadet Academy";
    const quote = "At Shamim Cadet Academy, we are dedicated to turning your dream of joining a prestigious Cadet College into reality. As a premier admission coaching center, we offer a comprehensive program that combines rigorous academic preparation with the discipline, mental toughness, and strategy needed to ace the admission test. We believe in fostering a strong sense of focus, confidence, and determination among our future cadets. Join us on a journey of growth and transformation as we equip our students to conquer one of the most competitive exams in the country. If you are ready to put in the hard work and secure your place at a Cadet College, Shamim Cadet Academy is where your journey begins."


    const TeamLeaders = [
        {
            key: 1,
            name: "Shaikh Shamim Ahmed",
            position: "Chairman & Director",
            image: "https://res.cloudinary.com/duhqyfbk1/image/upload/v1772035655/Shaikh_Shamim_Ahmed_q9fzjt.jpg",
            description: "Shaikh Shamim Ahmed is the Chairman and Director of Shamim Cadet Academy. With a passion for education and a commitment to excellence, he leads the academy with vision and dedication. His extensive experience in the field of education and his unwavering belief in the potential of every student drive the academy's mission to prepare future cadets for success."
        },
        {
            key: 2,
            name: "Major Md.Farid Mahmood (Retd)",
            position: "Chief Advisor",
            image: "https://www.shahidcadet-academy.com/wp-content/uploads/2023/02/chief-advisor.jpg",
            description: "Major Md.Farid Mahmood (Retd) is the Chief Advisor of Shamim Cadet Academy. His military background and extensive experience in leadership and strategic planning contribute significantly to the academy's success in preparing students for cadet college admissions."
        },
        {
            key: 3,
            name: "Captain Md. Ajim Uddin",
            position: "Advisor",
            image: "https://res.cloudinary.com/duhqyfbk1/image/upload/v1772346795/boss_bjr3cq.png",
            description: "Captain Md. Ajim Uddin is a retired member of Rangpur Cadet College and a respected Advisor at Shamim Cadet Academy. With his military expertise and dedication to mentoring young minds, he plays a crucial role in guiding students towards achieving their goals of joining prestigious cadet colleges."
        }
    ]
    return (
        <> <Hero />
            <MainPageLayout title={pageTitle} description={metaDescription} keywords={metaKeywords} author={metaAuthor}>
                <article>
                    <h1>Welcome to Shamim Cadet Academy</h1>
                    <p>{quote}</p>
                </article>
                <article>
                    <h2>About Us</h2>
                    <p>Shamim Cadet Academy is a premier coaching center dedicated to preparing students for admission to prestigious cadet colleges. Our program combines rigorous academic preparation with discipline, mental toughness, and strategic training to help students excel in competitive exams.</p>
                </article>
                <article className="teamLeader" style={{ padding: "20px", backgroundColor: "#f0f0f0", margin: "20px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", textAlign: "center", color: "#333", fontFamily: "Arial, sans-serif", fontWeight: "bold", fontSize: "18px", lineHeight: "1.5" }}>
                    <h2>Our Leadership Team</h2>
                    <div className="teamLeaders" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
                        {TeamLeaders.map((leader, index) => (
                            <div key={index} className="leader" style={{ maxWidth: "365px", display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px", padding: "20px", backgroundColor: "#fff", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", textAlign: "center", color: "#333", fontFamily: "Arial, sans-serif" }}>
                                <h3 style={{ color: "#261681", fontWeight: "bold" }}>{leader.name}</h3>
                                <img src={leader.image} alt={leader.name} height={250} />
                                <h4>{leader.position}</h4>
                                <p style={{ fontSize: 'small' }}>{leader.description}</p>
                            </div>
                        ))}
                    </div>
                </article>

                <aside>
                    <h2>Contact Us</h2>
                    <p>Email: email@shamimcadetacademy.com</p>
                    <p>Phone: +8801671-503680</p>
                    <p>Address: House #33, Road #01, Sector #09, Uttara, Dhaka</p>
                    <p>Website: shamimcadetacademy.com</p>

                </aside>
                <aside style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
                    <h2>Find Us on <a href="https://maps.app.goo.gl/9p9sRbdgVqawSxkw8">Google Maps</a></h2>
                    
                    <iframe title="Shamim Cadet Academy Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29188.82761032821!2d90.3872512!3d23.868211199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c59a4dc847ef%3A0x9cbb2cab270fb46a!2sShamim%20Cadet%20Academy!5e0!3m2!1sen!2sbd!4v1772351380406!5m2!1sen!2sbd" width="360" height="250" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    


                </aside>


            </MainPageLayout></>
    )
}