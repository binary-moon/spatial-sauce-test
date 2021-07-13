exports.createPages = async ({ actions: {createPage}, graphql }) => {
  const results = await graphql(`
    {
      allOurWorkJson {
        edges {
          node {
            slug
            isExternal
          }
        }
      }
    }
  `)

  if (results.error) {
    console.error('Something went wrong!');
    return;
  }

  results.data.allOurWorkJson.edges.forEach(edge => {
    const ourWork = edge.node;

    if (!ourWork.isExternal) {
      createPage({
        path: `/our-work/${ourWork.slug}`,
        component: require.resolve('./src/templates/OurWorkDetail.js'),
        context: {
          slug: ourWork.slug
        }
      })
    }
  })
}