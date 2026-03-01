import MainPageLayout from "../../components/Layout/MainPageLayout.jsx"
export default function Admission() {
    const pageTitle = "Admission - Shamim Cadet Academy";
    document.title = pageTitle;
    const metaTitle = "Admission | Shamim Cadet Academy";
    const poster = "https://res.cloudinary.com/duhqyfbk1/image/upload/v1772348498/F-2_oisqmx.png";
    const metaDescription = "Discover the admission process at Shamim Cadet Academy. We provide comprehensive coaching and guidance to help aspiring cadets succeed in their journey towards joining prestigious cadet colleges. Learn about our programs, eligibility criteria, and how we prepare students for the competitive admission tests.";
    const metaKeywords = "Shamim Cadet Academy, admission process, cadet college coaching, eligibility criteria, competitive exams, cadet college preparation";
    const metaAuthor = "Shamim Cadet Academy";
    return (
        <MainPageLayout>
                <h1>{metaTitle}</h1>
                <p>Discover the admission process at Shamim Cadet Academy. We provide comprehensive coaching and guidance to help aspiring cadets succeed in their journey towards joining prestigious cadet colleges. Learn about our programs, eligibility criteria, and how we prepare students for the competitive admission tests.</p>
                <img src={poster} alt="Admission Poster" style={{ maxWidth: '100%', height: 'auto' }} />
                <article>
                    <h2>Admission Process</h2>
                    <p>At Shamim Cadet Academy, we follow a structured admission process to ensure that we select the most deserving candidates for our coaching programs. The process includes:</p>
                    <ol type="1" style={{ paddingLeft: '20px', listStyleType: 'decimal', fontSize: '1.1em', fontWeight: 'bold' }}>
                        <li>Eligibility Check</li>
                        <li>Application Submission</li>
                        <li>Document Verification</li>
                        <li>Admission Test</li>
                        <li>Final Selection</li>
                    </ol>
                    <h2>Eligibility Criteria</h2>
                    <p>To be eligible for admission to our coaching programs, candidates must meet the following criteria:</p>
                    <ul style={{ listStyleType: 'square', paddingLeft: '20px', fontSize: '1.1em'}}>
                        <li>Age: Candidates must be between 12 and 18 years old.</li>
                        <li>Educational Qualification: Candidates must have completed their primary education and be currently enrolled in a secondary school.</li>
                        <li>Physical Fitness: Candidates must meet the physical fitness standards required for cadet college admission.</li>
                    </ul>
                    <h2>Preparation for Admission Tests</h2>
                    <p>Our coaching programs are designed to prepare students for the competitive admission tests conducted by cadet colleges. We provide comprehensive study materials, mock tests, and personalized coaching to help students excel in subjects such as Mathematics, English, General Knowledge, and Physical Fitness.</p>    

                    

                </article>
        </MainPageLayout>
    )
}