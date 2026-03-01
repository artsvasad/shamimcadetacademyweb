export default function MainPageLayout({children}){
    // style 

    return(
        <main style={{width: "90%", maxWidth: "1068px", margin: " 0 auto", textAlign: "justify"}}>
            {children}
        </main>
    )

}