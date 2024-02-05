import BlogPage from '@/components/BlogPage'
import getMetadata from '@/utils/getMetadata'

const ESBlogPage = () => <BlogPage lang='es' />
const generateMetadata = async () => await getMetadata('blog', 'es')

export default ESBlogPage
export { generateMetadata }
