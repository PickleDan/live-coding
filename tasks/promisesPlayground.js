function sleep(ms) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res()
        }, ms)
    })
}

function fetch1() {
    return sleep(500).then((res, rej) => rej())
}

function fetch2() {
    return sleep(1000).then(() => 22)
}


async function waitForResults(fetch1, fetch2) {
    const result = []

    try {
        const res1 = await fetch1()
        const res2 = await fetch2()

        result.push(res1, res2)
    } catch (err) {
        result.push('error')
    }

    console.log('### result', result)

    return result
}


// waitForResults(fetch1, fetch2).then((res) => {
//     console.log("### waitForResults", res)
// })

const fetchData = async (url) => {
    const response = await fetch(url)
    return await response.json()
}

const getData = async () => {
    const urls = ['https://jsonplaceholder.typicode.com/posts', 'https://jsonplaceholder.typicode.com/comments', 'https://jsonplaceholder.typicode.com/users']

    let requests = urls.map(url => fetchData(url))

    const [posts, comments, users] = await Promise.all(requests)

    return {
        posts,
        comments,
        users
    }
}

let result

getData().then(res => {
    console.log('### res', res)

    const {posts, comments, users} = res

    const getUserEntities = () => {
        return users.reduce((acc, userItem) => {
            return {
                ...acc,
                [userItem.id]: userItem
            }
        }, {})
    }

    const usersNormalized = getUserEntities()

    const postListResult = posts.map((postItem) => {
        const user = usersNormalized[postItem.userId]

        const commentsByPostId = comments.filter((comment) => {
            return comment.postId === postItem.id
        })

        return {
            id: postItem.id,
            title: postItem.title,
            userName: user.name,
            commentsCount: commentsByPostId.length
        }
    })

    console.log('### postListResult', postListResult)
})

