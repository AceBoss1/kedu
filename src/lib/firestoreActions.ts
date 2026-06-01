import { db } from "./firebase";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";

// Create user doc with UID as ID
export async function createUser(uid: string, email: string, name?: string) {
  await setDoc(doc(db, "users", uid), {
    email,
    name,
    createdAt: new Date().toISOString()
  });
}

// Create profile doc (auto-ID)
export async function createProfile(uid: string, lineage: string, language: string, roles: string[], tags: string[]) {
  await addDoc(collection(db, "profiles"), {
    userId: uid,
    lineage,              // e.g. "Ụmụnna"
    language,             // e.g. "Igbo"
    communityRoles: roles, // e.g. ["Diaspora", "Ụmụnne"]
    culturalTags: tags,    // e.g. ["Uli", "Ọjị"]
    createdAt: new Date().toISOString()
  });
}

// Create preferences doc
export async function createPreferences(uid: string, interests: string[], ageMin: number, ageMax: number, locationPref: string) {
  await addDoc(collection(db, "preferences"), {
    userId: uid,
    interests,
    ageRange: { min: ageMin, max: ageMax },
    locationPreference: locationPref
  });
}

// Create settings doc with UID as ID
export async function createSettings(uid: string) {
  await setDoc(doc(db, "settings", uid), {
    userId: uid,
    languagePreference: "ig",
    notificationsEnabled: true,
    privacyLevel: "community-only"
  });
}

// Send a message
export async function sendMessage(senderId: string, receiverId: string, content: string) {
  await addDoc(collection(db, "messages"), {
    senderId,
    receiverId,
    content,
    sentAt: new Date().toISOString(),
    read: false
  });
}
