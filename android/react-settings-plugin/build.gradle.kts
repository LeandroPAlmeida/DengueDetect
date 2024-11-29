import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    kotlin("jvm") version "1.9.24" // Plugin Kotlin JVM
    id("java-gradle-plugin") // Plugin para criar plugins Gradle
    id("com.android.application") // Plugin Android
    id("com.google.gms.google-services") version "4.4.2" apply false // Google Services
}

repositories {
    mavenCentral() // Repositório Maven Central
    google() // Repositório do Google para Firebase e Android
}

dependencies {
    // Firebase Platform (BOM - Bill of Materials)
    implementation(platform("com.google.firebase:firebase-bom:33.6.0"))

    // Firebase Analytics
    implementation("com.google.firebase:firebase-analytics")

    // Outras dependências, se necessário
    // implementation("com.example:other-dependency:1.0.0")
}

gradlePlugin {
    plugins {
        create("reactSettingsPlugin") {
            id = "com.facebook.react.settings"
            implementationClass = "expo.plugins.ReactSettingsPlugin"
        }
    }
}

