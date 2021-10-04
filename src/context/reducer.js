export let data = {
    authUser:[],
    stdData : [],
    users: [
        {
            userName: 'haider',
            email: 'haider@gmail.com',
            password: '123456',
            role: 'trainer'
        },
        {
            userName: 'akram',
            email: 'akram@gmail.com',
            password: '123456',
            role: 'student'
        },
    ]
}

export function reducer(state, action) {
    switch (action.type) {
        case "UPDATE_SNACK": {
            return {
                ...state,
                snacks: action.payload
            }
        }
        case "UPDATE_DRINK": {
            return {
                ...state,
                drink: action.payload
            }
        }
        case "UPDATE_USERS": {
            // let cloneUsers = state.users.slice(0)
            data.users = data.users.concat(action.payload)
            console.log(data.users)
            // return {
            //     ...state,
            //     users: cloneUsers
            // }
        }

        case "UPDATE_AUTH" : {
            return {
                ...state,
                authUser : action.payload

            }
        }

        case "SAVE_STD_DATA" : {
            data.stdData = data.stdData.concat(action.payload)
            console.log(data.stdData)
            // return {
            //     ...state,
            //     stdData : action.payload
            // }
        }
        default:
            return state;

    }
}