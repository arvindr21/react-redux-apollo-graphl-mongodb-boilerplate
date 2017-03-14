import User from '../models/user'

export const allUsers = function() {
	return User.find({}, function(err, users) {
		if(err) throw err
		return users
	})
}
