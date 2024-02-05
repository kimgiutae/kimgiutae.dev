import getMetadata from '@/utils/getMetadata'
import PortfolioPage from '@/components/PortfolioPage'

const ESPortfolioPage = () => <PortfolioPage lang='es' />
const generateMetadata = async () => await getMetadata('portfolio', 'es')

export default ESPortfolioPage
export { generateMetadata }
