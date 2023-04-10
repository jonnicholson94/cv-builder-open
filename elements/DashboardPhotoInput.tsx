
import HelpCard from "./HelpCard"

const DashboardPhotoInput = () => {
    return (
        <div className="auto-height width-100 flex-center margin-top-10">
           <div className="auto-height width-10 flex-start">
                <span className="avatar-alt"></span>
            </div> 
            <div className="auto-height width-50 flex-start">
                <p className="dashboard-photo-input-text">Selected photo</p>
            </div>
            <div className="auto-height width-40 flex-end">
                <HelpCard content="For best results, upload a photo with 256 x 256 dimensions." side="bottom">
                    <label className="dashboard-photo-input-label" htmlFor="photo">Upload</label>
                </HelpCard>
                <input className="dashboard-photo-input" id="photo" type="file" name="photo" />
            </div>
        </div>
    )
}

export default DashboardPhotoInput