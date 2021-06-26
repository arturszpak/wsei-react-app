import { useSelector } from 'react-redux';
import { PhotosContent } from '../../../redux/actions/photosActionsTypes';
import { UsersContent } from '../../../redux/actions/userActionTypes';
import { RootState } from '../../../redux/reducers';
import './Profile.scss'

const Profile = () => {

    const photosState: PhotosContent[] = useSelector<RootState, PhotosContent[]>((state: RootState)=> state.photos.photos)
    const usersState: UsersContent[] = useSelector<RootState, UsersContent[]>((state: RootState)=> state.users.users)

    let isUserInfoEdited = false;
    let isContentEdited = false;
    let isDataTablesEdited = false;

    const editInfo = (context: string): void => {

        const userInfoContainer: HTMLDivElement = document.querySelector(".profile__userInfo");
        const userContactContainer: HTMLDivElement = document.querySelector(".profile__userContact")
        const userChildren = [...userInfoContainer.children]
        const userContact  = [...userContactContainer.children]
        const profile = document.querySelector(".profile")

        if(context === "userInfo"){
            if(isUserInfoEdited === false){
                isUserInfoEdited = true;
                userChildren.forEach((child) => {
                    child.classList.add("nodisplay")
                    const changeInput = document.createElement("input");
                    changeInput.placeholder = child.textContent;
                    userInfoContainer.appendChild(changeInput);
                });
    
                userContact.forEach(child => {
                    child.classList.add("nodisplay")
                    const changeInput = document.createElement("input");
                    changeInput.placeholder = child.textContent;
                    userContactContainer.appendChild(changeInput);
                })
            }
            else if(isUserInfoEdited === true){
                const userInfo = [...userInfoContainer.getElementsByTagName("p")];
                [...userContactContainer.getElementsByTagName("p")].forEach(contactElement => userInfo.push(contactElement));
    
                const inputElements = [...userInfoContainer.getElementsByTagName("input")];
                [...userContactContainer.getElementsByTagName("input")].forEach(inputElement => inputElements.push(inputElement));
    
                const inputValues: string[] = [];
    
                [...inputElements].forEach(input => {
                    inputValues.push(input.value);
                    input.remove();
                });
                userInfo.forEach((p,i) => {
                    p.classList.remove("nodisplay")
                    p.textContent = inputValues[i];
                })
                isUserInfoEdited = false;
            }
        }
        else if(context === "panelInformation"){
            const panelInformation = profile.querySelector(".profile__panelInformation");
            const panelContents = [...panelInformation.querySelectorAll(".profile__userInformationContent")];
            const panelContentsContainer = [...profile.querySelectorAll(".profile__userInformation")];

            if(isContentEdited === false){
                isContentEdited = true;
                panelContents.forEach((content, i) => {
                    content.classList.add("nodisplay")
                    const changeInput = document.createElement("input");
                    changeInput.placeholder = content.textContent;
                    panelContentsContainer[i].appendChild(changeInput);
                });
            }
            else if(isContentEdited === true){
                const inputContentElements: HTMLInputElement[] = [];
                const paragraphContentElements: HTMLParagraphElement[] = [];

                panelContentsContainer.forEach(container => {
                    const containerInputs = [...container.getElementsByTagName("input")];
                    containerInputs.forEach(input => inputContentElements.push(input));

                    const containerParagraphs = [...container.getElementsByTagName("p")];
                    containerParagraphs.forEach(p => paragraphContentElements.push(p));
                })
    
                const inputValues: string[] = [];
    
                inputContentElements.forEach(input => {
                    inputValues.push(input.value);
                    input.remove();
                });

                paragraphContentElements.forEach((p,i) => {
                    p.classList.remove("nodisplay")
                    p.textContent = inputValues[i];
                })
                isContentEdited = false;
            }
        }
        else if(context === "dataTables"){
            if(isDataTablesEdited === false){
                isDataTablesEdited = true;
                const cellsContainer = profile.querySelectorAll(".dataTableCells")
                cellsContainer.forEach((container,i) => {
                    const tableCells = [...container.getElementsByTagName("td")]
                    tableCells.forEach((cell, j) => {
                        cell.classList.add("nodisplay");
                        const changeInput = document.createElement("input");
                        changeInput.style.width = "100px";
                        changeInput.style.marginRight = "2.5rem";
                        changeInput.placeholder = cell.textContent;
                        container.appendChild(changeInput);
                    })
                })
            }
            else if(isDataTablesEdited === true){
                const dataTableContainers = [...profile.querySelectorAll(".dataTableCells")];
                const inputValues: string[] = [];

                dataTableContainers.forEach((container, i) => {
                   const containerInputs = [...container.getElementsByTagName("input")];
                   containerInputs.forEach(input => {
                       inputValues.push(input.value);
                       input.remove();
                   });
                })
                let i = 0;
                dataTableContainers.forEach(container => {
                    const dataTableTD = [...container.getElementsByTagName("td")];
                    dataTableTD.forEach(td =>{
                        td.classList.remove("nodisplay");
                        td.textContent = inputValues[i];
                        i++;
                    })
                })

                isDataTablesEdited = false;
            }
            
                
        }
        else return;
    }

    return(
        <div className="profile">
            <div className="profile__actionBtns">
                <button className="profile__actionBtn">
                    <i className="far fa-comment"></i>
                    Message
                </button>
                <button className="profile__actionBtn">
                    <i className="far fa-file-alt"></i>
                    Create a request
                </button>
                <button className="profile__actionBtn">
                    <i className="fas fa-briefcase"></i>
                    Add to a cluster
                </button>
                <button className="profile__actionBtn">
                    <i className="fas fa-times"></i>
                </button>
            </div>
            <div className="profile__userGeneralInfo">
                {usersState.slice(0,1).map(user => (
                    <>
                        <div className="profile__userAvatar">
                            {
                                photosState.slice(0,1).map(photo => <img src={photo.thumbnailUrl} alt="user-avatar"/>)
                            }
                        </div>
                        <div className="profile__userInfo">
                            <p className="profile__userInfo__name">{user.name}</p>
                            <p className="profile__userInfo__company">{user.company.name}</p>
                            <p className="profile__userInfo__city">{user.address.city}</p>
                            <p className="profile__userInfo__position">{user.username}</p>
                        </div>
                        <div className="profile__userContact">
                            <p className="profile__userContact__mail">{user.email}</p>
                            <p className="profile__userContact__mobile">{user.phone}</p>
                        </div>
                    </>
                ))}
               
                <button className="profile__userInfo__editBtn editBtn" id="editUserInfoBtn" onClick={() => editInfo("userInfo")}>
                    <i className="fas fa-pencil-alt"></i>
                </button>
            </div>

            <hr className="horizontalLine"/>

            <div className="profile__userSkills">
                <div className="profile__userSkillWrapper">
                    <h3 className="profile__skillHeader">Expertise</h3>
                    <div className="profile__skills">
                        <p className="profile__skillName">
                            Mergers and acquisition
                        </p>
                    </div>

                </div>
                <div className="profile__userSkillWrapper">
                    <h3 className="profile__skillHeader">Specialities</h3>
                    <div className="profile__skills">
                        <p className="profile__skillName">
                            Cross border operation
                        </p>
                        <p className="profile__skillName">
                            Mergers and acquisition
                        </p>
                    </div>

                </div>
                <div className="profile__userSkillWrapper">
                    <h3 className="profile__skillHeader">Admission to practice law</h3>
                    <div className="profile__skills">
                        <p className="profile__skillName">
                            Bar Paris association
                        </p>
                    </div>
                </div>
                <div className="profile__userSkillWrapper">
                    <h3 className="profile__skillHeader">Counties</h3>
                    <div className="profile__skills">
                        <p className="profile__skillName">
                            Tunizia
                        </p>
                    </div>
                </div>
            </div>

            <hr className="horizontalLine"/>

            <div className="profile__panelInformation">
                <h2 className="profile__panelInformationHeader">Panel information</h2>
                <div className="profile__userInformationWrapper">
                    <h3 className="profile__userInformationHeader">Hourly fee</h3>
                    <div className="profile__userInformation">
                        <p className="profile__userInformationContent">
                            610&#8364;/hour (Negociated)
                        </p>
                    </div>
                </div>
                <div className="profile__userInformationWrapper">
                    <h3 className="profile__userInformationHeader">Terms & Conditions</h3>
                    <div className="profile__userInformation">
                        <p className="profile__userInformationContent">
                            Monthly 10k&#8364; retainer - see Jeanny Smith
                        </p>
                    </div>
                    <p className="profile__userInformationAttachment">
                        <i className="far fa-file-alt"></i>
                        Attachment_lorem-ipsum25425.jpg
                    </p>
                </div>
                <div className="profile__userInformationWrapper">
                    <h3 className="profile__userInformationHeader">Services & projects</h3>
                    <div className="profile__userInformation">
                        <p className="profile__userInformationContent">
                            Corporate M&A and international acquisitions
                        </p>
                    </div>
                </div>
                <div className="profile__userInformationWrapper">
                    <h3 className="profile__userInformationHeader">Internal correspondants</h3>
                    <div className="profile__correspondantInformationWrapper">
                        <div className="profile__correspondantInformation">
                            <img src="" alt="avatar" className="profile__correspondantAvatar" />
                            <p className="profile__correspondantName">John Doe</p>
                            <p className="profile__correspondantActionBtn">
                                <i className="far fa-comment"></i>
                                Message
                            </p>
                            <p className="profile__correspondantActionBtn">
                                <i className="fas fa-user-tie"></i>
                                Profile
                            </p>
                        </div>
                        <div className="profile__correspondantInformation">
                            <img src="" alt="avatar" className="profile__correspondantAvatar" />
                            <p className="profile__correspondantName">John Doe</p>
                            <p className="profile__correspondantActionBtn">
                                <i className="far fa-comment"></i>
                                Message
                            </p>
                            <p className="profile__correspondantActionBtn">
                                <i className="fas fa-user-tie"></i>
                                Profile
                            </p>
                        </div>
                    </div>
                </div>
                <button className="profile__panelInformation__editBtn editBtn" id="editPanelInformationBtn" onClick={() => editInfo("panelInformation")}>
                    <i className="fas fa-pencil-alt"></i>
                </button>
                <hr className="horizontalLine"/>
            </div>
            <div className="profile__proposals">
                <h3 className="profile__proposalsHeader">Proposals</h3>
                <table className="profile__proposalsDataTable">
                    <thead className="profile__proposalsTableColumn">
                        <tr>
                            <th>Name</th>
                            <th>Entity</th>
                            <th>Location</th>
                            <th>Expertise</th>
                            <th>Date</th>
                            <th>Firm</th>
                        </tr>
                    </thead>
                    <tbody className="profile__proposalsTableColumn">
                        <tr className="dataTableCells">
                            <td>Operation Title</td>
                            <td>Renault Corp.</td>
                            <td>France</td>
                            <td>#Tax</td>
                            <td>20/01/2018</td>
                            <td>Racine</td>
                        </tr>
                        <tr className="dataTableCells">
                            <td>Op. Promethes</td>
                            <td>Renault HQ</td>
                            <td>USA</td>
                            <td>#M&A</td>
                            <td>18/02/2019</td>
                            <td>Clifford</td>
                        </tr>
                        <tr className="dataTableCells">
                            <td>Op. Latandre</td>
                            <td>Renault Bridge</td>
                            <td>Italia</td>
                            <td>#Social</td>
                            <td>18/02/2019</td>
                            <td>SVZ</td>
                        </tr>
                    </tbody>
                </table>
                <button className="profile__seeMoreProposals">See more proposals</button>
                <button className="editBtn" id="editUserInfoBtn" onClick={() => editInfo("dataTables")}>
                    <i className="fas fa-pencil-alt"></i>
                </button>
            </div>
            
            <div className="profile__internalReviews">
                <h3 className="profile__internalReviewsHeader">Internal Reviews</h3>
                <table className="profile__internalReviewsDataTable">
                    <thead className="profile__internalReviewsTableColumn">
                        <tr>
                            <th>Name</th>
                            <th>Entity</th>
                            <th>Location</th>
                            <th>Expertise</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody className="profile__internalReviewsTableColumn">
                        <tr className="dataTableCells">
                            <td>Operation Title</td>
                            <td>Renault Corp.</td>
                            <td>France</td>
                            <td>#Tax</td>
                            <td>20/01/2018</td>
                        </tr>
                        <tr className="dataTableCells">
                            <td>Op. Promethes</td>
                            <td>Renault HQ</td>
                            <td>USA</td>
                            <td>#M&A</td>
                            <td>18/02/2019</td>
                        </tr>
                        <tr className="dataTableCells">
                            <td>Op. Latandre</td>
                            <td>Renault Bridge</td>
                            <td>Italia</td>
                            <td>#Social</td>
                            <td>18/02/2019</td>
                        </tr>
                    </tbody>
                </table>
                <button className="profile__seeMoreReviews">See more internal reviews</button>
            </div>
            <div className="profile__fees">
                <h3 className="profile__feesHeader">Amount of fees</h3>
                <table className="profile__feesDataTable">
                    <thead className="profile__feesTableColumn">
                        <tr>
                            <th>Year</th>
                            <th>Cost Center</th>
                            <th>Total Amount</th>
                            <th>Law firm</th>
                        </tr>
                    </thead>
                    <tbody className="profile__feesTableColumn">
                        <tr className="dataTableCells">
                            <td>2019</td>
                            <td>CS 153</td>
                            <td>3 500&#8364;</td>
                            <td>Clifford Chance</td>
                        </tr>
                        <tr className="dataTableCells">
                            <td>2018</td>
                            <td>CS 153</td>
                            <td>9 500&#8364;</td>
                            <td>Linklaters</td>
                        </tr>
                        <tr className="dataTableCells">
                            <td></td>
                            <td>CS 47</td>
                            <td>10 500&#8364;</td>
                            <td>Linklaters</td>
                        </tr>
                        <tr className="dataTableCells">
                            <td></td>
                            <td>CS 153</td>
                            <td>18 500&#8364;</td>
                            <td>Linklaters</td>
                        </tr>
                        <tr className="dataTableCells">
                            <td></td>
                            <td>CS 32</td>
                            <td>13 500&#8364;</td>
                            <td>Linklaters</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Profile;