import {FC,PropsWithChildren} from "react"

const RootLayout : FC<PropsWithChildren> = ({children}) => {
    return (
        <html lang="ja">
            <title>JamStack</title>
            <body>{children}</body>
        </html>
    )
}

export default RootLayout