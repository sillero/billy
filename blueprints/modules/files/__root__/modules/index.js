import { combineReducers } from 'redux'

<% for(var i=0; i<modules.length; i++) { %>import <%= modules[i] %> from './<%= modules[i] %>'
<% } %>
export default combineReducers({<% for(var i=0; i<modules.length; i++) { %>
  <%= modules[i] %>,<% } %>
})

<% for(var i=0; i<modules.length; i++) { %>export * from './<%= modules[i] %>'
<% } %>