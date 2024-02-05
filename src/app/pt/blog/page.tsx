import BlogPage from '@/components/BlogPage'
import getMetadata from '@/utils/getMetadata'

const PTBlogPage = () => <BlogPage lang='pt' />
const generateMetadata = async () => await getMetadata('blog', 'pt')

export default PTBlogPage
export { generateMetadata }
