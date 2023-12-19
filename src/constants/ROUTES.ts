import { LazyRouteType } from '@/types'

export const ROUTES = [
  'RecommendEntry',
  'Entry',
  'Recommend',
  'ProfileEdit',
  'BillFromSpotify',
  'BillHasOwner',
  'SigninWithEmail',
  'SignupWithEmail',
  'SignupGreeting',
  'Greeting',
  'Profile',
  'Home',
  'Search',
  'MyMusic',
  'Album',
  'Artist',
  'Bill'
]

export const routeConfig: {
  [key: string]: LazyRouteType
} = {
  RecommendEntry: { index: true, path: '/' },
  Recommend: { index: false, path: 'recommend/:id' },
  Search: { index: false, path: '/search' },
  MyMusic: { index: false, path: 'mymusic/:id', authentication: true },
  Profile: { index: false, path: 'profile/:id', authentication: true },
  Bill: { index: false, path: 'bill/:id' },
  BillHasOwner: {
    index: false,
    path: 'bill/:id/:userid'
  },
  BillFromSpotify: {
    index: false,
    path: 'bill/playlist/:id'
  },
  Album: { index: false, path: 'album/:id' },
  Artist: { index: false, path: 'artist/:id' }
}
