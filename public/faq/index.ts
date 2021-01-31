export interface Faq {
    id: string;
    name: string;
    source?: string;
    related?: string[]
}

export default [{
  id: 'e9f4',
  name: 'What is CORS?',
  related: ['b667', 'f173']
}, {
  id: 'abe3',
  name: 'Why am I getting a CORS error when I’m not even using CORS?',
  related: ['d1a6', 'b667', 'f173']
}, {
  id: 'b667',
  name: 'What does ‘origin’ mean?',
  related: ['fe2a']
}, {
  id: 'f173',
  name: 'How does CORS work?',
  related: ['b667', 'b1b0', 'b7f6']
}, {
  id: 'a313',
  name: 'Why am I seeing an OPTIONS request instead of the GET/POST/etc. request I wanted?'
}, {
  id: 'b7f6',
  name: 'What is a preflight request?',
  related: ['f173', 'b667', 'b6b0', 'b040', 'cd59', 'ffcc']
}, {
  id: 'd1a6',
  name: 'My request works fine in Postman/cURL/etc.. Why do I get a CORS error in the browser?',
  related: ['e9f4', 'f173', 'b6b0', 'c7f6']
}, {
  id: 'b6b0',
  name: 'How can I use cURL to test a preflight request?',
  related: ['b7f6', 'd1a6', 'c7f6']
}, {
  id: 'c7f6',
  name: 'Can Postman send a preflight request?',
  related: ['b7f6', 'd1a6', 'b6b0']
}, {
  id: 'b040',
  name: 'Why am I seeing a preflight OPTIONS request when I’m not setting any custom headers?',
  related: ['b7f6']
}, {
  id: 'cd59',
  name: 'How can I avoid the preflight OPTIONS request?',
  related: ['b7f6', 'b040']
}, {
  id: 'e21d',
  name: 'Why am I seeing ‘405 - Method Not Allowed’?',
  related: ['c320', 'b7f6']
}, {
  id: 'fcd5',
  name: 'What is withCredentials? How do I enable it?',
  related: ['cdc8', 'd926', 'ffcc']
}, {
  id: 'e9b8',
  name: 'What happens when a CORS request fails?',
  related: ['b4d0']
}, {
  id: 'c3f4',
  name: 'Why is CORS so complicated?',
  related: ['f173', 'ffcc']
}, {
  id: 'c381',
  name: 'CORS is annoying. Why can’t I turn it off?',
  related: ['c3f4', 'b7a4']
}, {
  id: 'b7a4',
  name: 'What are the alternatives to CORS?',
  related: ['c3f4', 'b7a4']
}, {
  id: 'bb30',
  name: 'I can’t change the server and it isn’t using CORS. What else can I do?'
}, {
  id: 'e96b',
  name: 'Does using HTTPS have any effect on CORS?',
  related: ['cdc8']
}, {
  id: 'f782',
  name: 'Does CORS work with localhost?',
  related: ['e96b', 'cdc8']
}, {
  id: 'a8d2',
  name: 'I’ve tried to implement CORS but it isn’t working. What should I do next?',
  related: ['ea74', 'cdc8', 'b1b0', 'a313', 'b56b']
}, {
  id: 'ea74',
  name: 'I’ve configured my server to include CORS headers but they still aren’t showing up. Why?',
  related: ['b7f6']
}, {
  id: 'cdc8',
  name: 'Why aren’t my cookies working with CORS?',
  related: ['fdb1', 'fcd5', 'ffcc']
}, {
  id: 'fdb1',
  name: 'Why can’t I see my cookies in the developer tools?',
  related: ['cdc8']
}, {
  id: 'b1b0',
  name: 'Why can’t I access the response headers in my JavaScript code?',
  related: ['b56b']
}, {
  id: 'bae3',
  name: 'Which CORS response headers go on the preflight response and which go on the main response?'
}, {
  id: 'b4d0',
  name: 'Why can’t I see my request in the Network section of the developer tools?'
}, {
  id: 'b56b',
  name: 'Why can’t I access the response headers in Chrome’s developer tools?',
  related: ['b4d0', 'b1b0']
}, {
  id: 'd926',
  name: 'How do the Authorization and WWW-Authenticate headers work with CORS?',
  related: ['b7f6', 'fcd5']
}, {
  id: 'ccdf',
  name: 'How can I include authorization headers on the preflight OPTIONS request?'
}, {
  id: 'c320',
  name: 'Does CORS support HTTP redirects?',
  related: ['fe2a', 'e21d']
}, {
  id: 'fe2a',
  name: 'Why is my Origin ‘null’?',
  related: ['b667', 'c320', 'ffcc']
}, {
  id: 'ffcc',
  name: 'What are the security implications of CORS?',
  related: ['fcd5', 'd926', 'fe2a']
}]
