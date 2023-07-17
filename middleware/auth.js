module.exports = {
  authenticator: (req, res, next) => {
    // req.isAuthenticated()是Passport.js 提供的函式，判斷request的登入狀態是true或false
    if (req.isAuthenticated()){
      return next()
    }
    req.flash('warning_msg', '請先登入才能使用！')
    res.redirect('/users/login')
  }
}