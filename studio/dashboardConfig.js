export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6016ebecd3430b519ec87b25',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-page-studio-kyzmg6mb',
                  apiId: '1a64a9ea-7413-4dd3-bf8e-1b2acd17e886'
                },
                {
                  buildHookId: '6016ebec7e88122451967ffa',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-page-web-175kfb1t',
                  apiId: 'd4289931-2281-41a1-8495-01fc5616f99d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alessiochiffi/sanity-nextjs-landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-page-web-175kfb1t.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
