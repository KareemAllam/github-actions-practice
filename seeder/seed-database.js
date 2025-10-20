import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import { planetsData } from './data.js';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);

// Build MongoDB connection string from environment variables
const mongoURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}`;

// Planet data schema (same as in app.js)
const Schema = mongoose.Schema;
const dataSchema = new Schema({
  name: String,
  id: Number,
  description: String,
  image: String,
  velocity: String,
  distance: String
});
const planetModel = mongoose.model('planets', dataSchema);


// Seeder function
async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding...');

    // Validate environment variables
    if (!process.env.DB_USERNAME || !process.env.DB_PASSWORD || !process.env.DB_CLUSTER) {
      throw new Error('Missing required environment variables. Please check your .env file.');
    }

    // Connect to MongoDB
    await mongoose.connect(mongoURI);
    console.log('✅ Connected to MongoDB successfully');

    // Clear existing data (optional - remove this if you want to keep existing data)
    const deleteResult = await planetModel.deleteMany({});
    console.log(`🗑️  Cleared ${deleteResult.deletedCount} existing documents`);

    // Insert new planet data
    const insertResult = await planetModel.insertMany(planetsData);
    console.log(`✅ Successfully inserted ${insertResult.length} planets into the database`);

    // Display inserted planets
    console.log('\n📋 Inserted planets:');
    insertResult.forEach(planet => {
      console.log(`   - ${planet.name} (ID: ${planet.id})`);
    });

    console.log('\n🎉 Database seeding completed successfully!');

  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  } finally {
    // Close the connection
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
    process.exit(0);
  }
}

// Run the seeder
seedDatabase();