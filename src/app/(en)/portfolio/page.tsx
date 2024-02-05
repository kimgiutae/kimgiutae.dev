import getMetadata from '@/utils/getMetadata'
import PortfolioPage from '@/components/PortfolioPage'

const ENPortfolioPage = () => <PortfolioPage lang='en' />
const generateMetadata = async () => await getMetadata('portfolio', 'en')

export default ENPortfolioPage
export { generateMetadata }
