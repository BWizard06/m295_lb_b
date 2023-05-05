# **API-Dokumentation**

## **/login**

### **Endpunkt**

```
POST /login
```

### **Anfrage-Parameter**

| Parameter | Typ | Beschreibung |
| --- | --- | --- |
| email | string | Erforderlich. Die E-Mail-Adresse des Benutzers. |
| password | string | Erforderlich. Das Passwort "m295". |

### **Antwort Codes**

| Status-Code | Beschreibung |
| --- | --- |
| 201 | Erfolgreiche Authentifizierung. Die E-Mail-Adresse des Benutzers wird zurückgegeben. |
| 400 | Die E-Mail-Adresse hat ein ungültiges Format. |
| 401 | Die Anmeldeinformationen sind ungültig. |

## **/verify**

### **Endpunkt**

```
GET /verify
```

### **Anfrage-Parameter**

Es gibt für diesen Endpunkt keine.

### **Antwort**

| Status-Code | Beschreibung |
| --- | --- |
| 200 | Erfolgreiche Überprüfung. Die E-Mail-Adresse des Benutzers wird zurückgegeben. |
| 401 | Der Benutzer ist nicht authentifiziert. |

## **/logout**

### **Endpunkt**

```

DELETE /logout
```

### **Anfrage-Parameter**

Es gibt für diesen Endpunkt keine.

### **Antwort**

| Status-Code | Beschreibung |
| --- | --- |
| 204 | **Erfolgreich** abgemeldet. Keine Rückgabe. |
| 401 | Der Benutzer ist nicht authentifiziert. |

## **/tasks**

### **Endpunkt**

```

GET /tasks
```

### **Anfrage-Parameter**

Es gibt für diesen Endpunkt keine.

### **Antwort**

| Status-Code | Beschreibung |
| --- | --- |
| 200 | Liste aller Aufgaben |


### **Endpunkt**

```
POST /tasks
```

### **Anfrage-Parameter**

| Parameter | Typ | Beschreibung |
| --- | --- | --- |
| title | string | **Erforderlich** Der Titel der Task |
| fulfillementDate | string | Das Datum, an dem die Aufgabe abgeschlossen werden soll, im Format YYYY-MM-DD. |

### **Antwort**

| Status-Code | Beschreibung |
| --- | --- |
| 201 | Die Aufgabe wurde erfolgreich erstellt. Die Details der erstellten Aufgabe werden zurückgegeben. |
| 406 | Es fehlt der Titel der Aufgabe oder der Titel ist leer. |

### **Endpunkt**

```
GET /tasks/:id
```

### **Anfrage-Parameter**

| Parameter | Typ | Beschreibung |
| --- | --- | --- |
| id | string | **Erforderlich**. Die ID der Aufgabe. |

### **Antwort**

| Status-Code | Beschreibung |
| --- | --- |
| 200 | Details der Aufgabe |
| 404 | Aufgabe nicht gefunden. |


### **Endpunkt**

```
PUT /tasks/:id
```

### **Anfrage-Parameter**

| Parameter | Typ | Beschreibung |
| --- | --- | --- |
| title | string | **Erforderlich**. Der Titel der Aufgabe. |
| fulfillementDate | string | Das Datum, an dem die Aufgabe abgeschlossen werden soll, im Format YYYY-MM-DD. |

### **Antwort**

| Status-Code | Beschreibung |
| --- | --- |
| 200 | Die Aufgabe wurde erfolgreich aktualisiert. Die Details der aktualisierten Aufgabe werden zurückgegeben. |
| 404 | Aufgabe nicht gefunden. |
| 406 | Es fehlt der Titel der Aufgabe oder der Titel ist leer. |

### **Endpunkt**

```

DELETE /tasks/:id
```

### **Anfrage-Parameter**

| Parameter | Typ | Beschreibung |
| --- | --- | --- |
| id | string | **Erforderlich**. Die ID der Aufgabe. |

### **Antwort**

| Status-Code | Beschreibung |
| --- | --- |
| 200 | Die Aufgabe wurde erfolgreich gelöscht. Die Details der gelöschten Aufgabe werden zurückgegeben. |