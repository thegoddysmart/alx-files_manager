# Files Manager API

This repository contains the **Files Manager API**, a simple file management system built with **Node.js**, **Express.js**, **MongoDB**, **Redis**, and **Bull** for background processing. The platform allows users to upload, view, and manage files, with features such as authentication, permissions management, and thumbnail generation for images.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Background Jobs](#background-jobs)
- [License](#license)

## Features

- User authentication using tokens.
- Upload and manage files (images, documents, etc.).
- View and change file permissions.
- Generate image thumbnails asynchronously.
- List and paginate all uploaded files.
- Store files and data in MongoDB.
- Store temporary data in Redis for faster access.
- Background worker to handle tasks such as image thumbnail generation.

## Requirements

To run this project, you will need:

- **Node.js** (version 12.x.x)
- **MongoDB** (version 4.x or later)
- **Redis** (version 5.x or later)
- **npm** (Node Package Manager)

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/thegoddysmart/alx-files_manager.git
cd alx-files_manager

