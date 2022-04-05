import React from 'react'
import classes from './Users.module.css'


const Users = (props) => {
/* if (props.users.length === 0) {
      props.setUsers([
          {
              id: 1,
              photoUrl: 'https://images2.minutemediacdn.com/image/upload/c_fill,w_1080,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/62455-shout-factory1-869b74b647b88045caac956956bd1ff8.jpg',
              followed: false,
              fullName: 'Eugene',
              status: 'I learn react',
              location: {city: 'Dnepr', country: 'Ukraine'}
          },
          {
              id: 2,
              photoUrl: 'https://images2.minutemediacdn.com/image/upload/c_fill,w_1080,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/62455-shout-factory1-869b74b647b88045caac956956bd1ff8.jpg',
              followed: true,
              fullName: 'Dmitry',
              status: 'I am a boss',
              location: {city: 'Minsk', country: 'Belarus'}
          },
          {
              id: 3,
              photoUrl: 'https://images2.minutemediacdn.com/image/upload/c_fill,w_1080,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/62455-shout-factory1-869b74b647b88045caac956956bd1ff8.jpg',
              followed: false,
              fullName: 'Kyrill',
              status: 'I am a student',
              location: {city: 'Kyiv', country: 'Ukraine'}
          },
      ])
  }*/

    return (
        <div>{
            props.users.map(u => <div key={u.id}>
                <span>
                <div>
                    <img src={u.photoUrl} className={classes.userPhoto}/>
                </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>

                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
        </div>
    )
}

export default Users