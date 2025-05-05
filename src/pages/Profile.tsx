import './Profile.scss'

const Profile= () => {
    return (
        <article className="profile-page">
            <section className="profile">
                <img src="public\images\profile.jpg"></img>
                <div className="profile-info">
                <h3>John Doe</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </section>
            <h2>Statistics</h2>
            <section className="stats">
                <div><span>567</span>pages</div>
                <div><span>50</span>books</div>
                <div><span>4</span>genres</div>
            </section>
        </article>
    )
}

export default Profile