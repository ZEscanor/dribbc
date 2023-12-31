import { g, auth, config } from '@grafbase/sdk'



// @ts-ignore
const User = g.model('User', {
  name: g.string().length({min: 1, max: 20}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().length({min: 3, max: 1000}).optional(),
  githubUrl: g.url().optional(),
  linkedinUrl: g.url().optional(),
  projects: g.relation(() =>Project).list().optional(),
}).auth((rules) => {
  rules.public().read()
  rules.private().update().delete()
})

// @ts-ignore
const Project = g.model('Project', {
  title: g.string().length({min:3}),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().optional().search(),
  createdBy: g.string(),
  creatorImage: g.string(),
  creatorEmail: g.string(),
  creator : g.relation(() => User).optional(),
  
  
  

}).auth((rules) => {
  rules.public().read(),
  rules.private().create().update().delete()
})

const jwt = auth.JWT({
  issuer: 'grafbase',
  secret:  g.env('NEXTAUTH_SECRET'),
})


export default config({
  schema: g,
  auth: {
    providers: [
      jwt,
    ],
    rules: (rules) => rules.private(),
  },
})
