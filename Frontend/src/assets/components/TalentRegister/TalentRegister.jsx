import React from "react"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { register, reset } from "../../redux/auth/authSlice"

const TalentRegister = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        telephone: '',
        bithdate: '',
        email: '',
        password: '',
        education: [],
        skills: [],
        interests: [],
        languages: [{ language: '', proficiency: '' }],
        awards: [],
        aboutTheTalent: '',
        //IMAGE
        //LIKEDOFFERS [{}]
        //APPLIEDOFFERS [{}]
        //RATINGS[]
    })

    const { name, surname, telephone, birthdate, email, password, education, skills, interests, languages, awards, aboutTheTalent } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isSuccess, isError } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isSuccess) {
            console.log("success")
            setTimeout(() => {
                navigate("/login")
            }, 1000);
        }
        if (isError) {
            console.log("error")
        }
        dispatch(reset())
    }, [isSuccess, isError])

    const handleChange = (e) => {

        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }


    const handleLanguagesChange = (index, e) => {
        const { name, value } = e.target
        const newLanguages = [...languages]
        newLanguages[index][name] = value;
        setFormData({
            ...formData,
            languages: newLanguages
        })
    }

    const addSkill = () => {
        setFormData({
            ...formData,
            skills: [{ ...skills }]
        })
    }

    const addLanguage = () => {
        setFormData({
            ...formData,
            languages: [...languages, { language: '', proficiency: '' }]
        }
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("form", formData)
        dispatch(register(formData))
    }

    return (
        <>
            <div>
                <h1>Register Talent</h1>
                <form onSubmit={handleSubmit}>
                    <div>

                        <input type="text" name="name" value={name} onChange={handleChange} placeholder="nombre" ></input>
                        <input type="text" name="surname" value={surname} onChange={handleChange} placeholder="apellido" ></input>
                        <input type="number" name="telephone" value={telephone} onChange={handleChange} placeholder="teléfono" ></input>
                        <input type="date" name="birthdate" value={birthdate} onChange={handleChange} placeholder="Fecha de nacimiento" ></input>
                        <input type="text" name="education" value={education} onChange={handleChange} placeholder="educación" ></input>
                        <input type="text" name="skills" value={skills} onChange={handleChange} placeholder="skills" ></input>
                        <button type="button" onClick={addSkill}> Add Skill </button>

                        <input type="text" name="interests" value={interests} onChange={handleChange} placeholder="interests"></input>

                        <label htmlFor="languages">
                            <h3>Languages</h3>
                            {/*   <input type="text" name="language" value={languages.language} onChange={handleChange} placeholder="language" > </input>
                            <input type="text" name="proficiency" value={lang.proficiency} onChange={handleChange} placeholder="proficiency" > </input> */}
                            {/* {languages.push({ languages.language, languages.proficiency })} */}
                        </label>

                        {languages.map((lang, index) => (
                            <div key={index}>
                                <input type="text" name="language" value={lang.language} onChange={(e) => handleLanguagesChange(index, e)} placeholder="Idioma" />
                                <input type="text" name="proficiency" value={lang.proficiency} onChange={(e) => handleLanguagesChange(index, e)} placeholder="Nivel" />
                            </div>
                        ))}
                        <button type="button" onClick={addLanguage}>Add Language</button>

                        <input type="text" name="awards" value={awards} onChange={handleChange} placeholder="awards" ></input>
                        <input type="text" name="aboutTheTalent" value={aboutTheTalent} onChange={handleChange} placeholder="aboutTheTalent" ></input>
                        {/* //input image uploader */}

                        <input type="email" name="email" value={email} onChange={handleChange} placeholder="email">
                        </input>
                        {/*   <input type="text" name="ratings" value={ratings} onChange={handleChange} placeholder="ratings" ></input> */}
                        <input type="password" name="password" value={password} onChange={handleChange} placeholder="password"></input>
                    </div>
                    <button type="submit">Register Talent</button>
                </form>
            </div>
        </>
    );
};

export default TalentRegister