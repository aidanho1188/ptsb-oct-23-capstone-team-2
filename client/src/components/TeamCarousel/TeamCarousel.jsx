import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from '@/components/ui/carousel'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import {Separator} from '@/components/ui/separator'
import mattImage from '@/assets/matt.jpeg'
import aidanImage from '@/assets/aidan.jpeg'
import danielaImage from '@/assets/daniela.jpeg'
import davidImage from '@/assets/david.jpeg'

function TeamCarousel() {
  return (
    <Carousel
      opts={{
        dragFree: true,
        loop: true,
        align: 'center',
        slidesToScroll: 'auto',
      }}
      className='w-full'
    >
      <CarouselContent className='-ml-2 md:-ml-4'>
        <CarouselItem className='basis-1/4 pl-2 md:pl-4'>
          <Card>
            <CardHeader>
              <img width={280} height={300} className='carousel-image' alt='Matt Picture Here' src={mattImage} loading='lazy' />
              <CardTitle>Matt Nolan</CardTitle>
              <CardDescription>Product Owner</CardDescription>
            </CardHeader>
            <Separator className='separator' />
            <CardContent>
              <p>
                Outside Unlimited <br />
                Administrative Account Manager
              </p>
            </CardContent>
          </Card>
        </CarouselItem>

        <CarouselItem className='basis-1/4 pl-2 md:pl-4'>
          <Card>
            <CardHeader>
              <img width={280} height={300} className='carousel-image' alt='Aidan Picture Here' src={aidanImage} loading='lazy' />
              <CardTitle>Aidan Ho</CardTitle>
              <CardDescription>Project Leader</CardDescription>
            </CardHeader>
            <Separator className='separator' />
            <CardContent>
              <p>Location: Biddeford, Maine</p>
              <p>Hobbies: Martial Arts, Guitar, Digital Arts</p>
            </CardContent>
          </Card>
        </CarouselItem>

        <CarouselItem className='basis-1/4 pl-2 md:pl-4'>
          <Card>
            <CardHeader>
              <img width={280} height={300} className='carousel-image' alt='Daniela Picture Here' src={danielaImage} loading='lazy' />
              <CardTitle>Daniela Watanabe</CardTitle>
              <CardDescription>Fullstack Developer</CardDescription>
            </CardHeader>
            <Separator className='separator' />
            <CardContent>
              <p>Location: Wichita, Kansas</p>
              <p>Hobbies: Gaming, Cooking, Crochet</p>
            </CardContent>
          </Card>
        </CarouselItem>

        <CarouselItem className='basis-1/4 pl-2 md:pl-4'>
          <Card>
            <CardHeader>
              <img width={280} height={300} className='carousel-image' alt='David Picture Here' src={davidImage} loading='lazy' />
              <CardTitle>David Blumenshine</CardTitle>
              <CardDescription>Fullstack Developer</CardDescription>
            </CardHeader>
            <Separator className='separator' />
            <CardContent>
              <p>Location: Wichita, Kansas</p>
              <p>Hobbies: Cycling, Painting, Coding</p>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default TeamCarousel
