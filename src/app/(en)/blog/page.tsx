import BlogPage from '@/components/BlogPage'
import getMetadata from '@/utils/getMetadata'

const ENBlogPage = () => <BlogPage lang='en' />
const generateMetadata = async () => await getMetadata('blog', 'en')

export default ENBlogPage
export { generateMetadata }
