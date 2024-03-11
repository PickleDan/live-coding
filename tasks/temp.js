const userService = {
    currentFilter: 'active',
    users: [
        {nmae: 'Alex', status: 'active'},
        {nmae: 'Nick', status: 'deleted'}
    ],
    getFilteredUsers: function () {
        const filterFunc = function (user) {
            return user.status === this.currentFilter
        }

        const filterFuncBound =  filterFunc.bind(this)

        return this.users.filter(filterFuncBound)
    }
}

console.log(userService.getFilteredUsers())
