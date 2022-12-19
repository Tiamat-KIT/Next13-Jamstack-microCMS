const RootLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <html lang="ja">
            <title>JamStack</title>
            <body>
                <h1>JamStack</h1>
                {children}
            </body>
        </html>
    )
}

export default RootLayout