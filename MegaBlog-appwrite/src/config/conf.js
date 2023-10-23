const conf = {
    appwriteurl : String(import.meta.env.VITE_APPWRITE_URL) ,   //isse pkka ho gya tab bhi value lengr string value ayegi
    appwriteProjectId : String(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionId : String(import.meta.env.VITE_COLLECTION_ID),
    appwriteBucketId : String(import.meta.env.VITE_BUCKET_ID),
}

export default conf