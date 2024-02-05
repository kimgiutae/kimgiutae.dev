import PortfolioPage from '@/components/PortfolioPage'
import getMetadata from '@/utils/getMetadata'

const PTPortfolioPage = () => <PortfolioPage lang='pt' />
const generateMetadata = async () => await getMetadata('portfolio', 'pt')

export default PTPortfolioPage
export { generateMetadata }
