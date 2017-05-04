Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', function () {
  this.render('home');
});
Router.route('/news', function () {
  this.render('news');
});
// Router.route('/blog', function () {
//   this.render('blog');
// });
// Router.route('/blog/:slug', function () {
//   this.render('slug');
// });
// 
