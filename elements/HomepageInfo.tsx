
type Props = {
    heading: string,
    paragraph: string,
    image: string
}

const HomepageInfo = ({ heading, paragraph, image }: Props) => {
    return (
        <div className="homepage-info flex-around margin-vertical-50">
            <div className="homepage-info-content column-start flex-column width-47">
                <h3 className="homepage-info-heading width-90">{heading}</h3>
                <p className="homepage-info-paragraph width-90">{paragraph}</p>
            </div>
            <img className="homepage-info-image" src={image} />
        </div>
    )
}

export default HomepageInfo