This is a starter template for [Learn Next.js](https://nextjs.org/learn).

### TODO
- [ ] Use `SWR` to fetch user profile


```
import useSWR from 'swr'

function Profile() {
  const { data, error } = useSWR('/api/user', fetch)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
```

- [ ] Examples in `Dynamic routes`, link in the links section


### Links

[SWR](https://swr.vercel.app/) \
[Data Fetching](https://nextjs.org/docs/basic-features/data-fetching) \
[Static File Serving](https://nextjs.org/docs/basic-features/static-file-serving) \
[Dynamic routes](https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details)