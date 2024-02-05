import HomePage from '@/components/HomePage'
import getMetadata from '@/utils/getMetadata'

const PTHomePage = () => <HomePage lang='pt' />
const generateMetadata = async () => await getMetadata('home', 'pt')

export default PTHomePage
export { generateMetadata }
