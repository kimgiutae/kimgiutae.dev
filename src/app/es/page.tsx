import HomePage from '@/components/HomePage'
import getMetadata from '@/utils/getMetadata'

const ESHomePage = () => <HomePage lang='es' />
const generateMetadata = async () => await getMetadata('home', 'es')

export default ESHomePage
export { generateMetadata }
