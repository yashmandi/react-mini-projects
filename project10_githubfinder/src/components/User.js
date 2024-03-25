import React from 'react'
import './styles.css'

function User({ user }) {

    const { avatar_url, followers, following, public_repos, name, login, created_at } = user;

    const createdDate = new Date(created_at);

    return (
        <div>
            <div>

                <div className='user'>
                    <div>
                        <img src={avatar_url} className='avatar' />
                    </div>
                    <div>
                        <a className="profile-link" href={`http://github.com/${login}`}>@{name || login}</a>
                        <p className='user-bio'>Joined on {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
                            month: "short",
                        })} ${createdDate.getFullYear()}`}</p>
                    </div>
                    <div className="user-stats">
                        <div className="stat">
                            <p className="stat-label">Repositories</p>
                            <p className="stat-value">{public_repos}</p>
                        </div>
                        <div className="stat">
                            <p className="stat-label">Followers</p>
                            <p className="stat-value">{followers}</p>
                        </div>
                        <div className="stat">
                            <p className="stat-label">Following</p>
                            <p className="stat-value">{following}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default User
