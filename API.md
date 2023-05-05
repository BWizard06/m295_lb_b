# **API-Dokumentation**

## **/login**

### **Beschreibung**

Authentifizierung durch E-Mail und Passwort. Nach erfolgreicher Authentifizierung wird eine Sitzung für den Benutzer erstellt.

### **Endpunkt**

```

POST /login
```

### **Anfrage-Parameter**

| Parameter | Typ | Beschreibung |
| --- | --- | --- |
| email | string | Erforderlich. Die E-Mail-Adresse des Benutzers. |
| password | string | Erforderlich. Das Passwort des Benutzers. |

### **Antwort**

| Status-Code | Beschreibung |
| --- | --- |
| 201 | Erfolgreiche Authentifizierung. Die E-Mail-Adresse des Benutzers wird zurückgegeben. |
| 400 | Die E-Mail-Adresse hat ein ungültiges Format. |
| 401 | Die Anmeldeinformationen sind ungültig. |

## **/verify**

### **Beschreibung**

Überprüfung, ob der Benutzer authentifiziert ist. Wenn der Benutzer authentifiziert ist, wird die E-Mail-Adresse des Benutzers zurückgegeben.

### **Endpunkt**

```

GET /verify
```

### **Anfrage-Parameter**

Keine.

### **Antwort**

| Status-Code | Beschreibung |
| --- | --- |
| 200 | Erfolgreiche Überprüfung. Die E-Mail-Adresse des Benutzers wird zurückgegeben. |
| 401 | Der Benutzer ist nicht authentifiziert. |

## **/logout**

### **Beschreibung**

Beendet die Sitzung des Benutzers.

### **Endpunkt**

```

DELETE /logout
```

### **Anfrage-Parameter**

Keine.

### **Antwort**

| Status-Code | Beschreibung |
| --- | --- |
| 204 | Erfolgreich abgemeldet. Keine Rückgabe. |
| 401 | Der Benutzer ist nicht authentifiziert. |

## **/tasks**

### **Beschreibung**

Verwaltung von Aufgaben (Tasks) durch den authentifizierten Benutzer.

### **Endpunkt**

```

GET /tasks
```

### **Anfrage-Parameter**

Keine.

### **Antwort**

| Status-Code | Beschreibung |
| --- | --- |
| 200 | Liste aller Aufgaben |

### **Beispiel-Antwort**

```

[
  {
    "id": 1,
    "title": "Buy milk",
    "creationDate": "2023-04-01T00:00:00.000Z",
    "fulfillementDate": "2023-04-02T00:00:00.000Z",
    "creator": "test@gmail.com"
  },
  {
    "id": 2,
    "title": "Call a friend",
    "creationDate": "2023-04-01T00:00:00.000Z",
    "fulfillementDate": "2023-04-03T00:00:00.000Z",
    "creator": "test@gmail.com"
  }
]

```

### **Endpunkt**

```

POST /tasks

```

### **Anfrage-Parameter**

| Parameter | Typ | Beschreibung |
| --- | --- | --- |
| title | string | Erforderlich Der Titel der Task |
| fulfillementDate | string | Das Datum, an dem die Aufgabe abgeschlossen werden soll, im Format YYYY-MM-DD. |

### **Antwort**

| Status-Code | Beschreibung |
| --- | --- |
| 201 | Die Aufgabe wurde erfolgreich erstellt. Die Details der erstellten Aufgabe werden zurückgegeben. |
| 406 | Es fehlt der Titel der Aufgabe oder der Titel ist leer. |

### **Beispiel-Antwort**

```

{
  "id": "ee6dcef1-998a-4eb3-a6db-1a3d3d056fd3",
  "title": "Wash the dishes",
  "creationDate": "2023-05-05T12:00:00.000Z",
  "fulfillementDate": "2023-05-06T12:00:00.000Z",
  "creator": "test@gmail.com"
}

```

### **Endpunkt**

```

GET /tasks/:id
```

### **Anfrage-Parameter**

| Parameter | Typ | Beschreibung |
| --- | --- | --- |
| id | string | Erforderlich. Die ID der Aufgabe. |

### **Antwort**

| Status-Code | Beschreibung |
| --- | --- |
| 200 | Details der Aufgabe |
| 404 | Aufgabe nicht gefunden. |

### **Beispiel-Antwort**

```

{
  "id": 1,
  "title": "Buy milk",
  "creationDate": "2023-04-01T00:00:00.000Z",
  "fulfillementDate": "2023-04-02T00:00:00.000Z",
  "creator": "test@gmail.com"
}

```

### **Endpunkt**

```

PUT /tasks/:id

```

### **Anfrage-Parameter**

| Parameter | Typ | Beschreibung |
| --- | --- | --- |
| title | string | Erforderlich. Der Titel der Aufgabe. |
| fulfillementDate | string | Das Datum, an dem die Aufgabe abgeschlossen werden soll, im Format YYYY-MM-DD. |

### **Antwort**

| Status-Code | Beschreibung |
| --- | --- |
| 200 | Die Aufgabe wurde erfolgreich aktualisiert. Die Details der aktualisierten Aufgabe werden zurückgegeben. |
| 404 | Aufgabe nicht gefunden. |
| 406 | Es fehlt der Titel der Aufgabe oder der Titel ist leer. |

### **Beispiel-Antwort**

```

{
  "id": 1,
  "title": "Buy milk and bread",
  "creationDate": "2023-04-01T00:00:00.000Z",
  "fulfillementDate": "2023-04-02T00:00:00.000Z"
}

```

### **Endpunkt**

```

DELETE /tasks/:id
```

### **Anfrage-Parameter**

| Parameter | Typ | Beschreibung |
| --- | --- | --- |
| id | string | Erforderlich. Die ID der Aufgabe. |

### **Antwort**

| Status-Code | Beschreibung |
| --- | --- |
| 200 | Die Aufgabe wurde erfolgreich gelöscht. Die Details der gelöschten Aufgabe werden zurückgegeben. |