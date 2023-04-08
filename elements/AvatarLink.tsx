
import Link from "next/link"

const AvatarLink = () => {
    return (
        <Link href="/profile">
            <div className="avatar flex-center">
                <p>JN</p>
            </div>
        </Link>
    )
}

export default AvatarLink