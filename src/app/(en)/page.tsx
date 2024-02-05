import HomePage from '@/components/HomePage'
import getMetadata from '@/utils/getMetadata'

const ENHomePage = () => <HomePage lang='en' />
const generateMetadata = async () => await getMetadata('home', 'en')

export default ENHomePage
export { generateMetadata }
