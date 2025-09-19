const mongoose = require('mongoose');

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/multivendor', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to local MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

// Initialize database with basic collections
const initDatabase = async () => {
  try {
    await connectDB();
    
    const db = mongoose.connection.db;
    
    // Create collections if they don't exist
    const collections = [
      'users',
      'shops', 
      'products',
      'orders',
      'conversations',
      'messages',
      'coupouncodes',
      'events',
      'withdraws'
    ];
    
    for (const collectionName of collections) {
      try {
        await db.createCollection(collectionName);
        console.log(`✅ Created collection: ${collectionName}`);
      } catch (error) {
        if (error.code === 48) { // Collection already exists
          console.log(`ℹ️  Collection already exists: ${collectionName}`);
        } else {
          console.error(`❌ Error creating collection ${collectionName}:`, error.message);
        }
      }
    }
    
    // Create indexes for better performance
    await createIndexes(db);
    
    console.log('🎉 Database initialization completed successfully!');
    process.exit(0);
    
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    process.exit(1);
  }
};

// Create useful indexes
const createIndexes = async (db) => {
  try {
    // Users collection indexes
    await db.collection('users').createIndex({ email: 1 }, { unique: true });
    await db.collection('users').createIndex({ phoneNumber: 1 });
    
    // Products collection indexes
    await db.collection('products').createIndex({ shopId: 1 });
    await db.collection('products').createIndex({ name: 'text', description: 'text' });
    await db.collection('products').createIndex({ category: 1 });
    await db.collection('products').createIndex({ createdAt: -1 });
    
    // Orders collection indexes
    await db.collection('orders').createIndex({ user: 1 });
    await db.collection('orders').createIndex({ shop: 1 });
    await db.collection('orders').createIndex({ status: 1 });
    await db.collection('orders').createIndex({ createdAt: -1 });
    
    // Shops collection indexes
    await db.collection('shops').createIndex({ owner: 1 });
    await db.collection('shops').createIndex({ name: 'text' });
    
    console.log('✅ Database indexes created successfully');
  } catch (error) {
    console.error('❌ Error creating indexes:', error.message);
  }
};

// Run initialization
initDatabase();
