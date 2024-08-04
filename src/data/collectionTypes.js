export const collectionOptions = [
    {key: 'own', label: 'Own'},
    {key: 'picked', label: 'Picked'},
    {key: 'recorded', label: 'Recorded'},
    {key: 'wishlist', label: 'Wishlist'}
]

export const validCollectionTypes = collectionOptions.map(c => c.label)

export const safelockCollectionOptions = [
    {key: 'safelocksOwn', label: 'Own'},
    {key: 'safelockCracked', label: 'Cracked'},
    {key: 'safelockWishlist', label: 'Wishlist'}
]

export const safelocksValidCollectionTypes = safelockCollectionOptions.map(c => c.label)
