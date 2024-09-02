import { Container, Title, TopBar, Filters } from '@/components/shared';
import { ProductCard } from '@/components/shared/ProductCard';
import { ProductsGroupList } from '@/components/shared/ProductsGroupList';


export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title  text = 'Все салаты' size='lg'  className='font-extrabold'/>
      </Container>
      <TopBar />
      <Container className='mt-10 pb-14'>
                <div className='flex gap-[80px]'>

                    <div className='w-[250px]'>
                        <Filters />
                    </div>

                    <div className='flex-1'>
                        <div className='flex flex-col gap-16'>
                            <ProductsGroupList title='Салаты' items={[
                            {
                              id: 1,
                              name: 'Салат с запечённой тыквой, творожным сыром и рукколой «Балабаев»',
                              imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/2888787/84560173-faeb-46f7-9252-e3fa71be4e3a/928x928-webp',
                              price: 299,
                              items: [{price: 299}],
                            },
                            {
                              id: 1,
                              name: 'Салат с запечённой тыквой, творожным сыром и рукколой «Балабаев»',
                              imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/2888787/84560173-faeb-46f7-9252-e3fa71be4e3a/928x928-webp',
                              price: 299,
                              items: [{price: 299}],
                            },
                            {
                              id: 1,
                              name: 'Салат с запечённой тыквой, творожным сыром и рукколой «Балабаев»',
                              imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/2888787/84560173-faeb-46f7-9252-e3fa71be4e3a/928x928-webp',
                              price: 299,
                              items: [{price: 299}],
                            },
                            {
                              id: 1,
                              name: 'Салат с запечённой тыквой, творожным сыром и рукколой «Балабаев»',
                              imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/2888787/84560173-faeb-46f7-9252-e3fa71be4e3a/928x928-webp',
                              price: 299,
                              items: [{price: 299}],
                            },
                            {
                              id: 1,
                              name: 'Салат с запечённой тыквой, творожным сыром и рукколой «Балабаев»',
                              imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/2888787/84560173-faeb-46f7-9252-e3fa71be4e3a/928x928-webp',
                              price: 299,
                              items: [{price: 299}],
                            },
                            {
                              id: 1,
                              name: 'Салат с запечённой тыквой, творожным сыром и рукколой «Балабаев»',
                              imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/2888787/84560173-faeb-46f7-9252-e3fa71be4e3a/928x928-webp',
                              price: 299,
                              items: [{price: 299}],
                            }
                            ]} categoryId={1} />

                            <ProductsGroupList title='Закуски' items={[
                            {
                              id: 1,
                              name: 'Салат с запечённой тыквой, творожным сыром и рукколой «Балабаев»',
                              imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/2888787/84560173-faeb-46f7-9252-e3fa71be4e3a/928x928-webp',
                              price: 299,
                              items: [{price: 299}],
                            },
                            {
                              id: 1,
                              name: 'Салат с запечённой тыквой, творожным сыром и рукколой «Балабаев»',
                              imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/2888787/84560173-faeb-46f7-9252-e3fa71be4e3a/928x928-webp',
                              price: 299,
                              items: [{price: 299}],
                            },
                            {
                              id: 1,
                              name: 'Салат с запечённой тыквой, творожным сыром и рукколой «Балабаев»',
                              imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/2888787/84560173-faeb-46f7-9252-e3fa71be4e3a/928x928-webp',
                              price: 299,
                              items: [{price: 299}],
                            },
                            {
                              id: 1,
                              name: 'Салат с запечённой тыквой, творожным сыром и рукколой «Балабаев»',
                              imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/2888787/84560173-faeb-46f7-9252-e3fa71be4e3a/928x928-webp',
                              price: 299,
                              items: [{price: 299}],
                            },
                            {
                              id: 1,
                              name: 'Салат с запечённой тыквой, творожным сыром и рукколой «Балабаев»',
                              imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/2888787/84560173-faeb-46f7-9252-e3fa71be4e3a/928x928-webp',
                              price: 299,
                              items: [{price: 299}],
                            },
                            {
                              id: 1,
                              name: 'Салат с запечённой тыквой, творожным сыром и рукколой «Балабаев»',
                              imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/2888787/84560173-faeb-46f7-9252-e3fa71be4e3a/928x928-webp',
                              price: 299,
                              items: [{price: 299}],
                            }
                            ]} categoryId={1} />
                        </div>
                    </div>
                </div>
      </Container>

      <div style={{height: '3000px'}}></div>
    </>
  )
}