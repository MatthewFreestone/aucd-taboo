import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/MatthewFreestone/aucd-taboo.git', // Update to point to your repository
  user: {
   name: 'Matthew Freestone', // update to use your name
   email: 'matthewfreestone1593@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);