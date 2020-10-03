from flask import Flask,render_template, url_for, request
from joblib import load

app = Flask(__name__)


project1 = load("project1.joblib")
project2 = load("project2.joblib")
project3 = load("project3.joblib")
project4 = load("project4.joblib")




@app.route('/')
def home():
    return render_template('index.html')

@app.route('/result', methods=['GET', 'POST'])
def result():
    if request.method == 'POST':
        df = []
        decision = int(request.form['decision'])

        if decision == 1:
            df.append(float(request.form['input1']))
            df.append(int(request.form['input2']))
            df.append(float(request.form['input3']))
            df.append(float(request.form['input4']))
            df.append(int(request.form['input5']))
            prediction = project1.predict([df])        
            if prediction[0] == 0:
                return render_template("p1_result0.html")
            else :
                return render_template("p1_result1.html")

        elif decision == 2:
            p2_result_text = ['Overcast 😁','Mostly Cloudy 😇','Partly Cloudy 😉','Clear 🤪','Foggy 🥰','Breezy and Partly Cloudy 😉','Breezy and Mostly Cloudy 😬','Breezy and Overcast 😌','Drizzle ☺️','Light Rain 🥰','Rain 😍']
            p2_result_gif = ['https://i.giphy.com/media/3o7rc6sa2RvKo8K5EI/giphy.webp','https://media1.giphy.com/media/G1T5M0qT6ZJlu/giphy.gif','https://media2.giphy.com/media/qq5gwamAHVofm/giphy.gif',
                                'https://media1.giphy.com/media/ZbISu3LvbjmE1QrkyZ/giphy.gif','https://media0.giphy.com/media/26xBwlGgyeQjxx09G/giphy.gif','https://media2.giphy.com/media/lOkbL3MJnEtHi/giphy.gif',
                                'https://media2.giphy.com/media/lOkbL3MJnEtHi/giphy.gif','https://media2.giphy.com/media/lOkbL3MJnEtHi/giphy.gif','https://media0.giphy.com/media/d1G6qsjTJcHYhzxu/giphy.gif',
                                'https://media0.giphy.com/media/Mgq7EMQUrhcvC/giphy.gif','https://media4.giphy.com/media/5torEEM8QnR95Cqg11/giphy.gif']
            df.append(float(request.form['input1']))
            df.append(float(request.form['input2']))
            df.append(float(request.form['input3']))
            df.append(float(request.form['input4']))
            df.append(float(request.form['input5']))
            df.append(float(request.form['input6']))
            prediction = project2.predict([df])[0]   
            return render_template("p2_result.html", gif = p2_result_gif[prediction], text =p2_result_text[prediction] )

        elif decision == 3:
            df.append(int(request.form['input1']))
            df.append(int(request.form['input2']))
            df.append(float(request.form['input3']))
            df.append(int(request.form['input4']))
            df.append(int(request.form['input5']))
            df.append(float(request.form['input6']))
            prediction = round(project3.predict([df])[0] ,2) 
            return render_template("p3_result.html", text = prediction)

        elif decision == 4:
            df.append(int(request.form['input1']))
            df.append(int(request.form['input2']))
            df.append(float(request.form['input3']))
            df.append(float(request.form['input4']))
            prediction = round(project4.predict([df])[0],2)
            return render_template("p4_result.html", text = prediction)


if __name__ == '__main__':
    app.run(debug=True)
